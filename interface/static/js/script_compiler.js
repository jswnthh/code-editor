document.addEventListener('DOMContentLoaded', async function () {
    const runButton = document.getElementById('run-btn');
    const outputDisplay = document.getElementById('output-display');
    const languageSelect = document.getElementById('language-select');

    // Initialize Ace Editor
    const fixEditor = ace.edit("fix-editor");
    fixEditor.setTheme("ace/theme/github");
    fixEditor.session.setMode("ace/mode/python"); // Default mode is Python
    fixEditor.setFontSize("16px");
    fixEditor.setShowPrintMargin(false);

 
    function addToOutput(s) {
        console.log(s);
        outputDisplay.textContent = s;
    }

    runButton.addEventListener('click', async function () {
        const code = fixEditor.getValue();
        const selectedLanguage = languageSelect.value;
        await runCode(code, selectedLanguage);
    });

    async function runCode(code, language) {
        outputDisplay.textContent = "Running...";

        if (!code.trim()) {
            outputDisplay.textContent = "No code to run!";
            return;
        }

        switch (language) {
            case "Python":
                await runPythonCode(code);
                break;
            case "JavaScript":
                runJavaScriptCode(code);
                break;
            case "C/C++":
                runCCode(code);
                break;
            case "Java":
                runJavaCode(code);
                break;
            default:
                outputDisplay.textContent = "Language not supported.";
        }
    }

    async function runPythonCode(code) {
        outputDisplay.textContent = "Running Python...";
    
        try {
            let response = await fetch("/execute-python/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: code }),
            });
    
            // Log the raw response text for debugging
            const responseText = await response.text();
            console.log("Raw response:", responseText);
    
            // Try to parse the response as JSON
            let result;
            try {
                result = JSON.parse(responseText);
            } catch (jsonError) {
                console.error("Error parsing JSON:", jsonError);
                outputDisplay.textContent = "Error: The server did not return valid JSON.";
                return;
            }
    
            if (!response.ok) {
                outputDisplay.textContent = result.error || "Server error occurred";
                return;
            }
    
            // Display output or error
            if (result.error) {
                outputDisplay.textContent = `Error:\n${result.error}`;
            } else {
                let output = result.output.trim();
                outputDisplay.textContent = output || "Program executed successfully with no output.";
    
                // If there's both output and error, show both
                if (result.error) {
                    outputDisplay.textContent += `\n\nStderr:\n${result.error}`;
                }
            }
    
        } catch (error) {
            outputDisplay.textContent = `Error: ${error.message}`;
            console.error("Python execution error:", error);
        }
    }
    
    
    
    function runJavaScriptCode(code) {
        let logOutput = [];
        const originalConsoleLog = console.log;
        console.log = (...messages) => {
            logOutput.push(...messages);
            originalConsoleLog(...messages);
        };

        try {
            if (!code.trim()) {
                outputDisplay.textContent = "No code to run!";
                return;
            }

            const result = eval(code);

            if (logOutput.length > 0) {
                outputDisplay.textContent = logOutput.join('\n');
            } else if (result !== undefined) {
                outputDisplay.textContent = result;
            } else {
                outputDisplay.textContent = "Executed successfully!";
            }

        } catch (error) {
            outputDisplay.textContent = `JavaScript Error: ${error.message}`;
            console.error("JavaScript execution error:", error);
        } finally {
            console.log = originalConsoleLog;
        }
    }
    function runJavaScriptCode(code) {
        let logOutput = [];
        const originalConsoleLog = console.log;
        console.log = (...messages) => {
            logOutput.push(...messages);
            originalConsoleLog(...messages);
        };

        try {
            const result = eval(code);
            if (logOutput.length > 0) {
                outputDisplay.textContent = logOutput.join('\n');
            } else if (result !== undefined) {
                outputDisplay.textContent = result;
            } else {
                outputDisplay.textContent = "Executed successfully!";
            }
        } catch (error) {
            outputDisplay.textContent = `JavaScript Error: ${error.message}`;
            console.error("JavaScript execution error:", error);
        } finally {
            console.log = originalConsoleLog;
        }
    }

    async function runCCode(code) {
        outputDisplay.textContent = "Compiling and running C++...";

        try {
            let response = await fetch("/compile-and-run-cpp/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: code }),
            });

            let result = await response.json();

            if (!response.ok) {
                outputDisplay.textContent = result.error || "Server error occurred";
                return;
            }

            // Display output or error
            if (result.error) {
                outputDisplay.textContent = `Error:\n${result.error}`;
            } else {
                let output = result.output.trim();
                outputDisplay.textContent = output || "Program executed successfully with no output.";

                // If there's both output and error, show both
                if (result.error) {
                    outputDisplay.textContent += `\n\nStderr:\n${result.error}`;
                }
            }

        } catch (error) {
            outputDisplay.textContent = `Error: ${error.message}`;
            console.error("C++ execution error:", error);
        }
    }
    
    async function runJavaCode(code) {
        outputDisplay.textContent = "Compiling and running Java...";
    

        try {
            let response = await fetch("/compile-and-run-java/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: code }),
            });

            console.log(response)

            let result = await response.json();

            if (!response.ok) {
                outputDisplay.textContent = result.error || "Server error occurred";
                return;
            }

            if (result.error) {
                outputDisplay.textContent = `Error:\n${result.error}`;
            } else {
                let output = result.output.trim();
                outputDisplay.textContent = output || "Program executed successfully with no output.";

                if (result.error) {
                    outputDisplay.textContent += `\n\nStderr:\n${result.error}`;
                }
            }

        } catch (error) {
            outputDisplay.textContent = `Error: ${error.message}`;
            console.error("Java execution error:", error);
        }
    }
});

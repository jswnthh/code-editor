# Code Editor
a code editor which can be used to host debugging competitions locally

![image](https://github.com/user-attachments/assets/998fe53f-94d7-4085-8176-3ce866b4cb8c)

# Overall Layout and Features:

## Split View: The interface is divided into three main sections:
- **Code Editor (Left):** This is where the user writes and edits their C/C++ code. It has line numbers for easy referencing.
- **Output Area (Bottom):** This displays the output of the compiled and executed code, including any error messages.
- **Controls/Information Bar (Top Right):** This area contains buttons for "Run", "Start Debugging", "Copy", "Save", and potentially other information or settings.


## Code Editor Section: Some CDN(i dont remember)
- **Line Numbers:** Line numbers are displayed on the left, which is crucial for debugging and navigating the code.
- **Syntax Highlighting:** The editor provides syntax highlighting to differentiate keywords, variables, strings, etc., making the code easier to read.
- **Automatic indendation and scope completion:**

## Output Area:
- **Error Messages:** The output area displays compiler error messages. This is essential for debugging. The errors indicate issues with the code.
- **Clear Error Button:** Sweeps off the Unpleasant errors for you if its disappointing.

## Controls/Information Bar:
- **Run Button:** Executes the code.
- **Copy Button:** Copies the code in the editor to the clipboard(it wont work over HTTP, it says unsecure connection, IDK what that means).
- **Save Button:** Saves the code to a file -> uploads folder.
- **"Buggy Code" Label:** Indicates that the code currently in the editor has known issues.
- **"Your Fix" Label:** Suggests that the user is expected to correct the "Buggy Code" and implement their solution.

## Execution:
This interface is shared across multiple computers via the LAN connection, allowing participants to debug their work. Once they are satisfied, they can click the save button, which prompts them to input their name and the question number. This information is used to name the file. (Problem: Currently, there is no validation check in place, so if two people save files with the same name, the system may accept both without any issue.) The main system will then receive these files, validate them, and assign marks.
 
## Potential Improvements:
Since this code editor was built in just a few days to provide a debugging experience, there are several areas that need further development, such as:
- Implementing a proper script to upload questions.
- Creating a script to run test cases.
- Developing a secure method for retrieving saved questions.
- Ensuring the copy button functions correctly.

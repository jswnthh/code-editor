import json
import subprocess
import tempfile
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render  # Import render to render templates
from io import StringIO
import sys




def index(request):
    return render(request, 'index.html')  

import os
import subprocess
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def compile_and_run_cpp(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            cpp_code = data.get("code", "")
            
            # Create a temporary directory for compilation
            with tempfile.TemporaryDirectory() as temp_dir:
                # Create source file
                source_file = os.path.join(temp_dir, "program.cpp")
                executable = os.path.join(temp_dir, "program")
                
                # Write the code to the source file
                with open(source_file, "w") as f:
                    f.write(cpp_code)
                
                # Compile the C++ code
                compile_result = subprocess.run(
                    ["g++", source_file, "-o", executable],
                    capture_output=True,
                    text=True
                )
                
                if compile_result.returncode != 0:
                    return JsonResponse({
                        "error": f"Compilation Error: {compile_result.stderr}"
                    }, status=400)
                
                # Run the compiled program with timeout
                try:
                    run_result = subprocess.run(
                        [executable],
                        capture_output=True,
                        text=True,
                        timeout=5  # 5 second timeout for safety
                    )
                    
                    return JsonResponse({
                        "output": run_result.stdout,
                        "error": run_result.stderr,
                        "exitCode": run_result.returncode
                    })
                    
                except subprocess.TimeoutExpired:
                    return JsonResponse({
                        "error": "Program execution timed out"
                    }, status=408)
                
        except Exception as e:
            return JsonResponse({
                "error": f"Server Error: {str(e)}"
            }, status=500)
    
    return JsonResponse({"error": "Invalid request"}, status=400)

@csrf_exempt
def compile_and_run_java(request):
    if request.method == "POST":
        try:
            # Parse the incoming JSON data
            data = json.loads(request.body)
            java_code = data.get("code", "")

            # Ensure that code is provided
            if not java_code.strip():
                return JsonResponse({"error": "No code provided"}, status=400)

            # Use a temporary directory to store the Java file
            with tempfile.TemporaryDirectory() as temp_dir:
                java_file = os.path.join(temp_dir, "Main.java")

                # Write the Java code to a temporary file
                with open(java_file, "w") as f:
                    f.write(java_code)

                try:
                    # Compile the Java code
                    compile_result = subprocess.run(
                        ["javac", java_file],
                        capture_output=True,
                        text=True
                    )

                    # Check if there were compilation errors
                    if compile_result.returncode != 0:
                        return JsonResponse({"error": f"Compilation Error: {compile_result.stderr}"}, status=400)

                except FileNotFoundError:
                    return JsonResponse({"error": "Java compiler not found. Ensure `javac` and `java` are installed."}, status=500)
                except Exception as e:
                    return JsonResponse({"error": f"Compilation process failed: {str(e)}"}, status=500)

                try:
                    # Run the compiled Java program
                    run_result = subprocess.run(
                        ["java", "-cp", temp_dir, "Main"],
                        capture_output=True,
                        text=True,
                        timeout=5  # Prevent infinite loops
                    )

                    return JsonResponse({
                        "output": run_result.stdout.strip(),
                        "error": run_result.stderr.strip(),
                        "exitCode": run_result.returncode
                    })

                except subprocess.TimeoutExpired:
                    return JsonResponse({"error": "Program execution timed out"}, status=408)
                except Exception as e:
                    return JsonResponse({"error": f"Execution process failed: {str(e)}"}, status=500)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        except Exception as e:
            return JsonResponse({"error": f"Server Error: {str(e)}"}, status=500)

    # If method is not POST
    return JsonResponse({"error": "Invalid request method"}, status=405)

UPLOAD_DIR = "uploads/"  # Change this to your desired folder

if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)  # Create directory if not exists

@csrf_exempt
def save_code(request):
    if request.method == "POST":
        name = request.POST.get("name", "anonymous").replace(" ", "_")
        qno = request.POST.get("qno", "anonymous").replace(" ", "_")
        code = request.POST.get("code", "")

        if not code:
            return JsonResponse({"message": "No code received!"}, status=400)

        filename = f"{UPLOAD_DIR}DebugFix_{name}_{qno}.txt"
        with open(filename, "w", encoding="utf-8") as file:
            file.write(code)

        return JsonResponse({"message": f"your response for question number {qno} is saved !!"})
    
    return JsonResponse({"message": "Invalid request"}, status=400)


@csrf_exempt
def compile_and_run_python(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            python_code = data.get("code", "")

            with tempfile.TemporaryDirectory() as temp_dir:
                source_file = os.path.join(temp_dir, "program.py")
                
                with open(source_file, "w") as f:
                    f.write(python_code)
                
                try:
                    run_result = subprocess.run(
                        ["python3", source_file],
                        capture_output=True,
                        text=True,
                        timeout=5
                    )

                    response_data = {
                        "output": run_result.stdout.strip(),
                        "error": run_result.stderr.strip(),
                        "exitCode": run_result.returncode
                    }

                    print("📤 Server Response:", json.dumps(response_data, indent=4))  # Debugging output
                    return JsonResponse(response_data)

                except subprocess.TimeoutExpired:
                    return JsonResponse({"error": "Program execution timed out"}, status=408)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON received"}, status=400)
        except Exception as e:
            return JsonResponse({"error": f"Server Error: {str(e)}"}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)



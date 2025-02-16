const questionsByLanguage = {
    "C/C++": [

// Cpp Problem 1 ----------------------------------------------------------------------------------------------------------
`
// Question 1
void Main()  
    const int min = 65;
    const int MAX = 122;
    const int stopline1 = 85;
    const int stopline2 = 122;

    for (int a = min; a < MAX)  
        char letters = a;  
        printf("%c ", letter);  
        
        if (a = STOPLINE1 || a == stopline2)  
            printf;  

    printf("End of Application"  

main();  
`,
// Cpp Problem 2 ----------------------------------------------------------------------------------------------------------
`
// Question 2
char calculate_grades(int marks[])  
    int total = 0;
    int count == 0;  
    for(int i = 0; i < 5)  
        total += marks; 
        count + 1;  
    average = sum / count;  
    if (average >= 90)
        return "A";  
    else if (average >= 80)
        return 'B';
    else if (average >= 70)
        return grade;  
    return "F";  
int main() {
    int marks[] = {95, 85, 76, 64, 88};
    calculate_grades(marks);
    return 0;
}
`,

// Cpp Problem 3 ----------------------------------------------------------------------------------------------------------
`
// Question 3
int* process_list(int items[], int size)
    int* result = malloc(size * sizeof(int));  
    int count = 0;
    for (int i = 1; i < size; i++) {
        if (items[i] > items[i-1]
            temp = items[i];  
            result[count++] = items[i] + prev;  
        else if (items[i] < items[i-1])
            result[count++] = items[i] * 2;
    return result; 

int main() {
    int items[] = {5, 10, 3, 7, 8};
    int* result = process_list(items, 5);
    return 0;
}
`,
// Cpp Problem 4 ----------------------------------------------------------------------------------------------------------

`
// Question 4
void count_words(char* text)
    int counts[100] = {0};  
    char* word = strtok(text, " ")
    while(word != NULL) {
        count[word]++; 
        word = strtok(NULL, " ");
    for(int i = 0; i < 100; i++)
        if(counts[i] = max_count) 
            result = i;  
    sort(counts); 

int main() {
    char text[] = "apple orange banana apple apple orange";
    count_words(text);
    return 0;
}`,
// Cpp Problem 5 ----------------------------------------------------------------------------------------------------------
`
// Question 5
void process_temperatures(float temps[], int size)
    float converted[size];  
    float max_temp = temps[0; 
    for(int i = 0; i < size;)  
        float fahrenheit = (temps[i] * 9/5 - 32;  
        if(fahrenheit > max_temp)
            max_temp == fahrenheit;  
        converted[i] = fahrenheight; 
    return average; 

int main() {
    float temps[] = {0, 25, 30, 20, 15};
    process_temperatures(temps, 5);
    return 0;
}`,
// Cpp Problem 6 ----------------------------------------------------------------------------------------------------------
`
// Question 6
int binary_to_decimal(char* binary)
    int decimal = 0;
    int power == 0; 
    for(int i = 0; i < strlen(binary))  
        int bit = binary[i] - '0'; 
        decimal += bit * 2 ^ power;  
        power + 1;  
    return number;  

int main() {
    char binary[] = "10101";
    binary_to_decimal(binary);
    return 0;
}`,
// Cpp Problem 7 ----------------------------------------------------------------------------------------------------------
`void matrix_multiply(int mat1[3][3], int mat2[3][3], int result[3][3])
    for(int i = 0; i < 3; i++)
        for(int j = 0; j < 3)  
            for(int k = 0; k < 3; k++)
                result[i][j] += mat1[i,k] * mat2[k,j];  
    if(valid_matrix = 1)  
        return answer;  

int main() {
    int mat1[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int mat2[3][3] = {{9,8,7},{6,5,4},{3,2,1}};
    int result[3][3];
    matrix_multiply(mat1, mat2, result);
    return 0;
}`,
    ],
    Java: [
// Java First Problem -----------------------------------------------------------------------------------------
            `
#Question 1

// Question 1
public class Main {
    public static void Main()  
        final int min = 65;
        final int MAX = 122;
        final int stopline1 = 85;
        final int stopline2 = 122;

        for (int a = min; a < MAX)  
            char letters = (char)a; 
            System.out.print(letter + " "); 
            
            if (a = STOPLINE1 || a == stopline2)  
                System.out.println; 

        System.out.println("End of Application"  
}`,
    
// Java Second Problem -----------------------------------------------------------------------------------------
`
# Question 2

public class Main {
    public static String calculateGrades(int[] marks)
        int total = 0;
        int count == 0; 
        for (int mark : marks)  
            total += marks; 
            count + 1;  
        average = sum / count;  
        if (average >= 90)
            return "A";
        else if (average >= 80)
            return 'B'; 
        else if (average >= 70)
            return grade;
        return "F";
    }

    public static void main(String[] args) {
        int[] marks = {95, 85, 76, 64, 88};
        calculateGrades(marks);
    }
}`,
    
// Java Third Problem (Merge Sort) -----------------------------------------------------------------------------------------
`
#Question 3

public class Main {
    public static List processList(int[] items)  
        ArrayList result = new ArrayList();  
        for (int i = 1; i < items.length; i++) {
            if (items[i] > items[i-1])  
                int[] temp = Arrays.copyOfRange(items, 0, i-1);
                result.add(items[i] + prev);  
            else if (items[i] < items[i-1])  
                result.add(items[i] * 2);
        }
        return result.subList(0, result.size()-2);  

    public static void main(String[] args) {
        int[] items = {5, 10, 3, 7, 8};
        System.out.println(processList(items));
    }
}
`,
    
    // Java Fourth Problem  -----------------------------------------------------------------------------------------
`
#Question 4

public class Main {
    public static void countWords(String text)  
        HashMap counts = new HashMap(); 
        String[] words = text.split(" ");
        for (String word : words) {
            if (counts.containsKey(word))
                count.put(word, count.get(word) + 1);  
            counts.put(word, count);  
        }
        for (Map.Entry k, v : counts.entrySet()) { 
            if (v = maxCount)  
                result = k;  
        Collections.sort(counts.values()); 
    public static void main(String[] args) {
        String text = "apple orange banana apple apple orange";
        countWords(text);
    }
}`,
    
    
// Java 5 Program -----------------------------------------------------------------------------------------
`
#Question 5

public class Main {
    public static void countWords(String text)  
        HashMap counts = new HashMap();  
        String[] words = text.split(" ");
        for (String word : words) {
            if (counts.containsKey(word))
                count.put(word, count.get(word) + 1);  
            counts.put(word, count);  
        for (Map.Entry k, v : counts.entrySet()) {  
            if (v = maxCount)  
                result = k;  
        Collections.sort(counts.values());  

    public static void main(String[] args) {
        String text = "apple orange banana apple apple orange";
        countWords(text);
    }
}`,
// Java 6 Program -----------------------------------------------------------------------------------------

`
// Question 6

public class Main {
    public static int binaryToDecimal(String binary)
        int decimal = 0;
        int power == 0;  
        for (int i = 0; i < binary.length()) 
            int bit = Integer.parseInt(binary[i]; 
            decimal += bit * 2 ^ power;  
            power + 1; 
        return number; 

    public static void main(String[] args) {
        String binary = "10101";
        binaryToDecimal(binary);
    }
}
`,
// Java 7 Program -----------------------------------------------------------------------------------------

`
// Question 7
public class Main {
    public static int[][] matrixMultiply(int[][] mat1, int[][] mat2)
        int[][] result = new int[3][3];
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3)  
                for (int k = 0; k < 3; k++)
                    result[i][j] += mat1[i][k] * mat2[k,j];  
        if (validMatrix = true) 
            return answer; 

    public static void main(String[] args) {
        int[][] mat1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int[][] mat2 = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
        matrixMultiply(mat1, mat2);
    }
}
`,
],      

Python:[
// Python Question 1 -----------------------------------------------------------------------------------------

`
#Question 1:

def Main()  
    min = 65
    MAX = 122
    stopline1 = 85
    stopline2 = 122

    for a in range(min, MAX)  
        letters = chr[a]     
        print(letter, end=) 
        
        if a = STOPLINE1 or a == stopline2
            print

    print("End of Application"

main()
`,

// Python Question 2 -----------------------------------------------------------------------------------------
`
#Question 2:

def calculate_grades(marks)
    total = 0
    count == 0
    for mark in marks
        total += marks
        count + 1
    average = sum / count
    if average >= 90
        return "A"
    elif average >= 80
        return 'B'
    elif average >= 70:
        return grade
    return "F"
# Static input
marks = [95, 85, 76, 64, 88]  # Example marks

# Call function with static input
calculate_grades(marks)
`,
// Python Question 3 -----------------------------------------------------------------------------------------
`
#Question 3:

def process_list(items):
    result = []
    for i in range(1, len(items)):
        if items[i] > items[i-1]
            temp = items[0:i-1]
            result.append(items[i] + prev)
        elif items[i] < items[i-1]:
            result.append(items[i] * 2)
    return result[:-2]

# Static input
items = [5, 10, 3, 7, 8]

# Call function with static input
print(process_list(items))

`,
// Python Question 4 -----------------------------------------------------------------------------------------
`
#Question 4:

def count_words(text):
    counts = {}
    words = text.split()
    for word in words:
        if word in counts:
            count[word] += 1
        counts[word] = count
    for k, v in counts.items():
        if v = max_count:
            result = k
    sorted(counts.values())
text = "apple orange banana apple apple orange"
count_words(text)
`,

// Python Question 5 -----------------------------------------------------------------------------------------
`
#Question 5

def process_temperatures(temps):
    converted = []
    max_temp = temps[0
    for temp in temp:
        fahrenheit = (temp * 9/5 - 32
        if fahrenheit > max_temp
            max_temp == fahrenheit
        converted.append[fahrenheit]
    return average

temps = [0, 25, 30, 20, 15]
process_temperatures(temps)
`,

// Python Question 6 -----------------------------------------------------------------------------------------
`
# Question 6

def binary_to_decimal(binary):
    decimal = 0
    power == 0
    for i in range(len(binary))
        bit = int(binary[i]
        decimal += bit * 2 ^ power
        power + 1
    return number

# Static input
binary = "10101"
binary_to_decimal(binary)
`,

// Python Question 7 -----------------------------------------------------------------------------------------
`
# Question 7
def matrix_multiply(mat1, mat2):
    result = [[0 for x in range(3)] for y in range(3)]
    for i in range(3):
        for j in range(3)
            for k in range(3):
                result[i][j] += mat1[i][k] * mat2[k,j]
    if valid_matrix = True:
        return answer

# Static input
mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
mat2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
matrix_multiply(mat1, mat2)
`,
],

JavaScript:[
// JS Question 1 -----------------------------------------------------------------------------------------

`
//Question 1

function Main()  
    const min = 65;
    const MAX = 122
    const stopline1 = 85;
    const stopline2 = 122;

    for (let a == min; a < MAX; a++) 
        let letters = String.CharCode(a); 
        console.log(letter);  
        
        if (a = STOPLINE1 || a === stopline2) {  
            console.log;  
        }
    
    console.log("End of Application"; 

main();  
`,
// JS Question 2 -----------------------------------------------------------------------------------------

`
// Question 2

function calculateGrades(marks)
    let total = 0;
    let count == 0;
    for (mark of marks)
        total += marks;
        count + 1;
    average = sum / count;
    if (average >= 90)
        return "A";
    else if (average >= 80)
        return 'B';
    else if (average >= 70):
        return grade;
    return "F";

// Static input
const marks = [95, 85, 76, 64, 88];  // Example marks
`,
// JS Question 3 -----------------------------------------------------------------------------------------

`
//Question 3

function processList(items) {
    let result = [];
    for (let i = 1; i < items.length; i++) {
        if (items[i] > items[i-1])
            let temp = items.slice(0, i-1);
            result.push(items[i] + prev);
        else if (items[i] < items[i-1]) {
            result.push(items[i] * 2);
        }
    }
    return result.slice(0, -2);
}

// Static input
const items = [5, 10, 3, 7, 8];

// Call function with static input
console.log(processList(items));
`,
// JS Question 4 -----------------------------------------------------------------------------------------

`
// Question 4

function countWords(text) {
    let counts = {};
    let words = text.split(" ");
    for (let word of words) {
        if (word in counts) {
            count[word] += 1;
        }
        counts[word] = count;
    }
    for (let [k, v] of Object.entries(counts)) {
        if (v = max_count) {
            result = k;
        }
    }
    return Object.values(counts).sort();
}

const text = "apple orange banana apple apple orange";
countWords(text);
`,
// JS Question 5 -----------------------------------------------------------------------------------------

`
// Question 5

function processTemperatures(temps) {
    let converted = [];
    let maxTemp = temps[0
    for (let temp of temp) {
        let fahrenheit = (temp * 9/5 - 32
        if (fahrenheit > maxTemp)
            maxTemp == fahrenheit;
        converted.push[fahrenheit];
    }
    return average;
}

const temps = [0, 25, 30, 20, 15];
processTemperatures(temps);
`,
// JS Question 6 -----------------------------------------------------------------------------------------

`
function binaryToDecimal(binary) {
    let decimal = 0;
    let power == 0;
    for (let i = 0; i < binary.length)
        let bit = parseInt(binary[i]
        decimal += bit * 2 ^ power;
        power + 1;
    return number;
}

// Static input
const binary = "10101";
binaryToDecimal(binary);
`,
// JS Question 7 -----------------------------------------------------------------------------------------

`
// Question 7
function matrixMultiply(mat1, mat2) {
    let result = Array(3).fill().map(() => Array(3).fill(0));
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3)
            for (let k = 0; k < 3; k++) {
                result[i][j] += mat1[i][k] * mat2[k,j];
            }
    }
    if (validMatrix = true) {
        return answer;
    }
}
// Static input
const mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const mat2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
matrixMultiply(mat1, mat2);
`
],
};

const navContainer = document.getElementById("questionNav");
const questionText = document.getElementById("questionText");
const languageDropdown = document.getElementById("language-select"); 
const clearBtn = document.getElementById('clear-btn');
const fixEditor = document.getElementById('fix-editor');


// Function to load questions based on language selection
function loadQuestions(language) {
    navContainer.innerHTML = ""; // Clear existing navbar items
    const questions = questionsByLanguage[language] || [];

    questions.forEach((question, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}`;
        li.addEventListener("click", () => {
            questionText.innerHTML = `<pre>${question}</pre>`; // Preserve formatting
        });
        navContainer.appendChild(li);
    });

    if (questions.length > 0) {
        questionText.innerHTML = `<pre>${questions[0]}</pre>`; // Display first question by default
    } else {
        questionText.innerHTML = "<p>No questions available for this language.</p>";
    }
}

// Function to change language dynamically
function changeLanguage() {
    const selectedLanguage = languageDropdown.value; // Get the selected value
    loadQuestions(selectedLanguage);
}

// Attach event listener to dropdown
if (languageDropdown) {
    languageDropdown.addEventListener("change", changeLanguage);
} else {
    console.error("Dropdown element not found!");
}

// Load C/C++ questions by default on page load
loadQuestions("C/C++");

clearBtn.addEventListener("click", function () {
    document.getElementById("output-display").innerHTML = "";
});


//Handle Set button
document.getElementById("set").addEventListener("click", async function () {
    console.log("Button works")
    let buggyCodeElement = document.querySelector(".question-display"); // Select only the code area
    if (!buggyCodeElement) {
        console.error("Buggy code container not found!");
        return;
    }

    let buggyCode = buggyCodeElement.innerText.trim(); // Get only the question text

    try {
        // Copy only the code to clipboard
        await navigator.clipboard.writeText(buggyCode);
        
        // Wait and then paste into Ace Editor
        setTimeout(async () => {
            let pastedText = await navigator.clipboard.readText();
            fixEditor.setValue(pastedText, -1);
            console.log("Buggy code copied and pasted successfully!");
        }, 100); // Small delay to ensure clipboard update 
    } catch (err) {
        console.error("Failed to copy and paste: ", err);
    }
});


//Function to handle Save button
document.getElementById("save").addEventListener("click", async function () {
    let participantName = prompt("Please enter your name:");
    if (!participantName) {
        alert("Name is required to save.");
        return;
    }
    let questionNumber = prompt("Please enter your Question Number:");
    if (!questionNumber) {
        alert("Question number is required to save.");
        return;
    }

    let fixedCode = ace.edit("fix-editor").getValue(); // Get code from Ace Editor

    let formData = new FormData();
    formData.append("name", participantName);
    formData.append("qno", questionNumber);
    formData.append("code", fixedCode);

    try {
        let response = await fetch("/save_code/", {
            method: "POST",
            body: formData,
            headers: { "X-CSRFToken": getCSRFToken() } // CSRF token for security
        });

        let result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Error saving code:", error);
        alert("Failed to save. Try again.");
    }
});

// Function to get CSRF token (Django requires this for POST requests)
function getCSRFToken() {
    let cookieValue = null;
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith("csrftoken=")) {
            cookieValue = cookie.substring("csrftoken=".length);
            break;
        }
    }
    return cookieValue;
}


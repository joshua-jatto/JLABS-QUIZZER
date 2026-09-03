/*
  JLABS QUESTION DATABASE
  -----------------------
  Update this array to add, remove, or edit questions.

  Required fields:
    id       : unique question ID
    topic    : topic/category used for the performance breakdown
    question : question text
    options  : array of four answer choices
    answer   : zero-based index of the correct option

  Example:
  {
    id: 31,
    topic: "HTML",
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0
  }
*/

const QUESTIONS = [
  {
    id: 1, topic: "OS Fundamentals",
    question: "What is a process in an operating system?",
    options: [
      "A network cable connecting computers",
      "A physical component inside the computer",
      "A program or task currently being executed",
      "A file stored permanently on disk"
    ], answer: 2
  },
  {
    id: 2, topic: "OS Fundamentals",
    question: "What is the main job of the CPU?",
    options: [
      "Connect the computer to Wi-Fi",
      "Display web pages on the screen",
      "Store files permanently",
      "Execute instructions and perform calculations"
    ], answer: 3
  },
  {
    id: 3, topic: "OS Fundamentals",
    question: "What does RAM primarily provide to a computer?",
    options: [
      "Temporary working space for active programs and data",
      "Permanent storage for files",
      "A connection to the internet",
      "A method for creating HTML pages"
    ], answer: 0
  },
  {
    id: 4, topic: "Windows / macOS",
    question: "Which Windows tool can be used to view running processes and their CPU and memory usage?",
    options: [
      "Task Manager",
      "Notepad",
      "File Explorer",
      "Paint"
    ], answer: 0
  },
  {
    id: 5, topic: "Windows / macOS",
    question: "What is the macOS equivalent commonly used to inspect running processes and resource usage?",
    options: [
      "Safari",
      "TextEdit",
      "Finder",
      "Activity Monitor"
    ], answer: 3
  },
  {
    id: 6, topic: "Process Types",
    question: "Which process is generally more likely to be a normal user process?",
    options: [
      "A system boot service",
      "A web browser opened by the user",
      "A hardware driver service",
      "The operating system kernel"
    ], answer: 1
  },
  {
    id: 7, topic: "Process Monitoring",
    question: "A process suddenly uses 95% CPU for several minutes. What should a beginner do first?",
    options: [
      "Disable every running process",
      "Delete the process file from disk",
      "Identify the process and investigate what it is doing",
      "Immediately shut down the computer"
    ], answer: 2
  },
  {
    id: 8, topic: "Process Monitoring",
    question: "Why can high CPU usage be normal in some situations?",
    options: [
      "Some legitimate programs require significant processing power",
      "CPU usage has no relationship to running programs",
      "High CPU usage always means malware is present",
      "The CPU only becomes active when malware runs"
    ], answer: 0
  },
  {
    id: 9, topic: "HTML",
    question: "Which HTML element normally contains the main visible content of a web page?",
    options: [
      "body",
      "head",
      "meta",
      "title"
    ], answer: 0
  },
  {
    id: 10, topic: "HTML",
    question: "Which HTML element is commonly used for the largest main heading?",
    options: [
      "img",
      "h1",
      "br",
      "p"
    ], answer: 1
  },
  {
    id: 11, topic: "HTML",
    question: "What is HTML primarily used for?",
    options: [
      "Managing operating-system processes",
      "Structuring the content of a web page",
      "Styling colors and layouts",
      "Encrypting network traffic"
    ], answer: 1
  },
  {
    id: 12, topic: "CSS",
    question: "Which CSS method places styles directly inside an HTML element using the style attribute?",
    options: [
      "External CSS",
      "Internal CSS",
      "Inline CSS",
      "Browser CSS"
    ], answer: 2
  },
  {
    id: 13, topic: "CSS",
    question: "Where is internal CSS normally placed in an HTML document?",
    options: [
      "Inside an img element",
      "Inside a style element",
      "Inside a JavaScript console",
      "Inside a file extension"
    ], answer: 1
  },
  {
    id: 14, topic: "CSS",
    question: "What is a major benefit of external CSS?",
    options: [
      "It automatically removes JavaScript",
      "One stylesheet can style multiple web pages",
      "It turns every web page into an image",
      "It replaces HTML completely"
    ], answer: 1
  },
  {
    id: 15, topic: "JavaScript",
    question: "What is JavaScript primarily used for on a web page?",
    options: [
      "Physically increasing RAM",
      "Adding behavior and interactivity",
      "Defining the basic HTML structure",
      "Replacing the computer's operating system"
    ], answer: 1
  },
  {
    id: 16, topic: "Process Monitoring",
    question: "If you want to find which processes are consuming the most CPU, what should you do in Task Manager or Activity Monitor?",
    options: [
      "Sort processes by CPU usage",
      "Sort files by filename",
      "Change the desktop wallpaper",
      "Open a text editor"
    ], answer: 0
  },
  {
    id: 17, topic: "Suspicious Behavior",
    question: "Which observation would be more suspicious and worth investigating?",
    options: [
      "A web browser briefly uses CPU while loading a page",
      "An unknown process repeatedly consumes very high CPU",
      "A media player uses CPU while playing a video",
      "An operating-system service briefly uses CPU during an update"
    ], answer: 1
  },
  {
    id: 18, topic: "Process Safety",
    question: "What is the safest general principle when terminating a process?",
    options: [
      "Identify it and confirm it is safe to terminate first",
      "Delete the operating system after termination",
      "Terminate system processes whenever they appear unfamiliar",
      "Terminate every process using more than 1% CPU"
    ], answer: 0
  },
  {
    id: 19, topic: "Process Safety",
    question: "What can happen if you terminate an important system process?",
    options: [
      "The CPU is permanently upgraded",
      "All malware is permanently removed",
      "The computer automatically gains more RAM",
      "The system or an important function may become unstable"
    ], answer: 3
  },
  {
    id: 20, topic: "Web Fundamentals",
    question: "Which sequence best represents the basic web development roles introduced in this week?",
    options: [
      "HTML structure, CSS styling, JavaScript behavior",
      "HTML networking, CSS operating system, JavaScript storage",
      "HTML encryption, CSS CPU management, JavaScript file recovery",
      "HTML behavior, CSS storage, JavaScript hardware"
    ], answer: 0
  },
  {
    id: 21, topic: "Process Safety",
    question: "What should you check before terminating an unfamiliar process?",
    options: [
      "Only the color of its icon",
      "Its name, purpose, resource usage, and whether it is a critical system component",
      "Only whether it appears near the top of the process list",
      "Whether the desktop wallpaper is currently active"
    ], answer: 1
  },
  {
    id: 22, topic: "Process Monitoring",
    question: "Why is it useful to monitor CPU usage over time instead of looking at it only once?",
    options: [
      "It permanently reduces CPU usage",
      "It helps distinguish a temporary spike from persistent high usage",
      "It guarantees that every high-CPU process is malware",
      "It prevents applications from creating processes"
    ], answer: 1
  },
  {
    id: 23, topic: "Memory",
    question: "What does unusually high memory usage tell you about a running process?",
    options: [
      "It has permanently increased the computer's RAM",
      "It is definitely malware",
      "It must be a system process",
      "It is using a large amount of available RAM and may need investigation"
    ], answer: 3
  },
  {
    id: 24, topic: "HTML",
    question: "Which HTML element is used to create a paragraph?",
    options: [
      "h1",
      "p",
      "div",
      "span"
    ], answer: 1
  },
  {
    id: 25, topic: "HTML",
    question: "Which HTML element is commonly used to create a hyperlink?",
    options: [
      "href",
      "link",
      "url",
      "a"
    ], answer: 3
  },
  {
    id: 26, topic: "CSS",
    question: "Which statement correctly describes inline, internal, and external CSS?",
    options: [
      "Inline controls JavaScript, internal controls hardware, and external controls the CPU",
      "All three methods are exactly the same and are placed in the same location",
      "Inline is always in a separate file, internal is inside JavaScript, and external is inside an image",
      "Inline is on an element, internal is in a style element, and external is in a separate stylesheet"
    ], answer: 3
  },
  {
    id: 27, topic: "CSS",
    question: "If the same CSS rules are needed across 20 web pages, which approach is generally most appropriate?",
    options: [
      "Use a shared external stylesheet",
      "Write the same inline styles on every element",
      "Write the styles separately inside JavaScript variables",
      "Put all styles inside image files"
    ], answer: 0
  },
  {
    id: 28, topic: "JavaScript",
    question: "Which is a simple example of JavaScript interacting with a web page?",
    options: [
      "Connecting a monitor cable to the computer",
      "Changing text on the page after a button is clicked",
      "Changing the physical size of the computer's RAM",
      "Replacing the operating system kernel"
    ], answer: 1
  },
  {
    id: 29, topic: "Process Safety",
    question: "A program becomes unresponsive. What should you generally try before forcefully terminating it?",
    options: [
      "Restart the operating system kernel manually",
      "Wait briefly and check whether the program recovers",
      "Delete all of its files immediately",
      "Terminate every process on the computer"
    ], answer: 1
  },
  {
    id: 30, topic: "Cybersecurity Thinking",
    question: "After safely terminating a suspicious process, what is a sensible next step for a beginner?",
    options: [
      "Record what was observed and investigate the process and system activity further",
      "Delete random system files",
      "Assume the computer is completely secure",
      "Disable all security software"
    ], answer: 0
  }
];
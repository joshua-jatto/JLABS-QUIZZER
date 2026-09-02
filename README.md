# JLABS Student Quiz

A simple static quiz application for JLABS students.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage only
- No database
- No backend
- No API
- GitHub Pages compatible

## Files

```text
jlabs-quiz/
├── index.html
├── styles.css
├── app.js
├── questions.js
├── README.md
└── assets/
    └── jlabs-logo.png
```

## Updating the Question Database

Open `questions.js`.

Each question has:

```javascript
{
  id: 31,
  topic: "HTML",
  question: "Your question here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: 0
}
```

`answer` is zero-based:

- `0` = Option A
- `1` = Option B
- `2` = Option C
- `3` = Option D

The `topic` field is important because the application uses it to generate the topic performance breakdown.

## Student Performance

The app collects the student's name before the quiz.

At the end it displays:

- Student name
- Score and percentage
- Correct answers
- Incorrect answers
- Unanswered questions
- Topic-by-topic performance
- Questions requiring review
- Date/time

The result can be:

1. Captured as a screenshot.
2. Copied and pasted into WhatsApp.
3. Downloaded as a TXT file.
4. Opened through WhatsApp using the Share via WhatsApp button.

## Local Performance History

The app stores a small performance history in the student's browser using `localStorage`.

This is NOT a central database. It only exists in the browser/device where the quiz was completed.

The downloadable TXT report is therefore the recommended method for sending results to the tutor.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Upload all files while preserving the folder structure.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the main branch and `/root`.
6. Save.
7. GitHub Pages will provide the public quiz URL.

Because the app is entirely static, no server configuration is required.

## Adding Future Weeks

For Week 2, Week 3, etc., you can either:

- replace the questions in `questions.js`, or
- expand the app later to include separate quiz files/quiz modules.

The current design intentionally keeps the question database separate from the application logic so tutors can update questions without rewriting the quiz engine.
"# JLABS-QUIZZER" 

# React + TypeScript + Vite

## What features are available

* Each new tab with an application is a separate project with its own list of tasks;
* Editable project name as page title;
* List with tasks:
    - Adding a new task to the list;
    - Removing any task from the list;
    - The ability to mark any task as done and the ability to remove this mark (mark as done/not done);
* Ability to add subtasks to any task (with potentially infinite depth);
* Input field for searching/filtering tasks in the list
* Ability to edit the name of a task after its creation;
* Export a project to a file / import a project from a file;
    - The name of the saved file must match the name of the project;
* Drag-n-drop to move tasks in the list
* Saving the current filter so you can quickly use it later;
* The final application should weigh is around 340kb. I used MUI for UI, in short, the reason for the size is styling;
* Typescript used 100%;
* Vite bundler used;
* ESLint/TSLint used to control code quality;
* Scalability to mobile devices up to 320*480px (iPhone 4);

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

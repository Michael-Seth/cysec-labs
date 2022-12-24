Here are admin Routes:

1. **CREATE ADMIN: /manage/create-admin**
  1. **Body=\>** {user: firstname, lastname, username, email, password}}

2. **CREATE NEW LAB: /manage/create-new-lab**
  1. **Body =\> {labInfo:{name, description, tags, machineInfo, path, labImage}}**

3. **EDIT LAB: /manage/edit-lab**
  1. **Body =\> {labInfo:{labID, name, description, category, tags, machineInfo, path}}**
4. **ADD UNIT TO LAB:/manage**** /add-unit-to-lab/:labID**
  1. **Body =\> {unitInfo:{tasks, heading descritiption}}**
  2. **Params=\> labID**

5. **EDIT UNIT: /edit-unit**
  1. **Body =\> {unitInfo:{unitID, heading descritiption}}**

6. **ADD TASK TO UNIT: /add-task-to-unit/:unitID**
  1. **Body =\> {taksInfo:{ question, answer, isAnswerRequired, isCaseSensitive}}**
  2. **Params: unitID**

7. **EDIT TASK:**** /edit-task**
  1. **Body: {taksInfo:{ID, question, answer, isAnswerRequired, isCaseSensitive}}**

8. **DELETE TASK: /delete-task**
  1. **Body: {taskInfo:{taskID}}**

9. **ADD DOWNLOADABLE MATERIAL:**** /add-downloadable-material**
  1. **Body: {materialInfo:{name, description, filename, storageDetails}}**

10. **GET MACHINE ROUTES: /get-machine-info**
  1. **{machineInfo:**** { name }}**

11. **QUEUE MACHINE: /queue-machine**
  1. **{machineInfo:**** { name, key}}**

12. **GET SIGNED URL: /get-signed-url?queryparams**
  1. **Accepted query params: (filename, filetype) e.g http://localhost:8081/api/v1/manage/getsingned-url?filename=myfilename&filetype=png**

  2. **You can query just filetype of filename.**


  PLEASE SEE LOOOK FOR **server.ts**  you will see **app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);** 

change the origin to match up what url you are using in your frontend.
without this? you might get CORS error


let mytodo_list=[]
// create
function CreateTask(){
    let task=document.getElementById("add-task").value
    if(task==""){
        alert('please enter a task')
    }else{
        mytodo_list.push(task);
        document.getElementById("add-task").value=""
        ReadAllTask()
    }
}
// read
function ReadAllTask(){
    let data = ""
    for(var i=0;i<mytodo_list.length;i++){
        data+="<tr>"
        data+="<td>"+ mytodo_list[i]+ "</td>";
        data+="<td><button class='btn btn-primary' onClick=UpdateTask(" + i+")>Update</button></td>"
        data+="<td><button class='btn btn-danger' onClick=DeleteTask(" + i+")>Delete</button></td>";
        data+= "</tr>"
    }
    document.getElementById("counter").innerHTML=mytodo_list.length+"Task";
    document.getElementById("mytodo-tasks").innerHTML=data;
}
ReadAllTask()

// update
function UpdateTask(item){
    document.getElementById("UpdateForm").style.display="block"
    document.getElementById("update-task").value=mytodo_list[item]
    document.getElementById("UpdateForm").onsubmit=function(){
        let task= document.getElementById("update-task").value;
        mytodo_list.splice(item,1,task.trim());
        ReadAllTask()
        CloseInput()
    }
}
// Delete
function DeleteTask(item){
    mytodo_list.splice(item,1);
    ReadAllTask()
}

function CloseInput(){
    document.getElementById("UpdateForm").style.display="none"
}

window.addEventListener('beforeunload',(e)=>{
 e.preventDefault();
 let confirmMessage = "are you sure to reload? you will be loosing all data if you reload"

 e.returnValue=confirmMessage;
 return confirmMessage
})

//         let alarms = [];

//         function addAlarm() {
//             const alarmTimeInput = document.getElementById('alarmTime');
//             const alarmTime = alarmTimeInput.value;

//             if (!alarmTime) {
//                 alert('Please set the alarm time.');
//                 return;
//             }

//             const alarmNoteInput = document.getElementById('alarmNote');
//             const alarmNote = alarmNoteInput.value;

//             alarms.push({ time: alarmTime, note: alarmNote });

//             displayAlarms();
//             alarmTimeInput.value = '';
//             alarmNoteInput.value = '';
//         }

//         function displayAlarms() {
//             const alarmsList = document.getElementById('alarmsList');
//             alarmsList.innerHTML = '';

//             alarms.forEach((alarm, index) => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `Alarm ${index + 1}: ${alarm.time} - ${alarm.note}`;
//                 alarmsList.appendChild(listItem);
//             });
//         }

//         function setAlarms() {
//             alarms.forEach(alarm => {
//                 const now = new Date();
//                 const alarmDate = new Date(now.toDateString() + ' ' + alarm.time);
//                 const currentTime = now.getTime();
//                 const alarmTimeMilliseconds = alarmDate.getTime();

//                 if (currentTime > alarmTimeMilliseconds) {
//                     alert('Please set an alarm time in the future.');
//                     return;
//                 }

//                 const timeUntilAlarm = alarmTimeMilliseconds - currentTime;

//                 setTimeout(function() {
//                     // const alarmSound = document.getElementById('alarmSound');
//                     // alarmSound.play();

//                     // alert(`Alarm: ${alarm.time}\nNote: ${alarm.note}`);

//                  alert(" your alarm ")


//                 }, timeUntilAlarm);
//             });
//         }


   
          

//    setAlarms()
        



        let alarms = [];

        function addAlarm() {
            const alarmTimeInput = document.getElementById('alarmTime');
            const alarmTime = alarmTimeInput.value;

            if (!alarmTime) {
                alert('Please set the alarm time.');
                return;
            }

            const alarmNoteInput = document.getElementById('alarmNote');
            const alarmNote = alarmNoteInput.value;

            alarms.push({ time: alarmTime, note: alarmNote });

            displayAlarms();
            alarmTimeInput.value = '';
            alarmNoteInput.value = '';

            // Call setAlarms to set the newly added alarm
            setAlarms();
        }

        function displayAlarms() {
            const alarmsList = document.getElementById('alarmsList');
            alarmsList.innerHTML = '';

            alarms.forEach((alarm, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Alarm ${index + 1}: ${alarm.time} - ${alarm.note}`;
                alarmsList.appendChild(listItem);
            });
        }

        function playSoundAndShowAlert(alarm) {
            return new Promise(resolve => {
              const alarmSound = document.getElementById('alarmSound');
              alarmSound.play();
          
              // Wait for a short period to ensure the sound starts playing
              setTimeout(() => {
                alert(`Alarm: ${alarm.time}\nNote: ${alarm.note}`);
                resolve();
              }, 100);
            });
          }
          async function setAlarms() {
            for (const alarm of alarms) {
              const now = new Date();
              const alarmDate = new Date(now.toDateString() + ' ' + alarm.time);
              const currentTime = now.getTime();
              const alarmTimeMilliseconds = alarmDate.getTime();
          
              if (currentTime > alarmTimeMilliseconds) {
                alert('Please set an alarm time in the future.');
                return;
              }
          
              const timeUntilAlarm = alarmTimeMilliseconds - currentTime;
              await new Promise(resolve => setTimeout(resolve, timeUntilAlarm));
          
              await playSoundAndShowAlert(alarm);
            }
          }
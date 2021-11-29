const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Comprare il latte',
                done: false
            },
            {
                text: 'Andare in farmacia',
                done: false
            },
            {
                text: 'Fare lavatrice',
                done: false
            }
        ],
        myDate: '',
        myMonth: '',
        myYear: '',
        myDayName: '',
        newTask: '',
        overflow: false
    },
    methods: {
        addTask: function(){
            if (this.newTask.split(" ").join("") != ''){
                const x = {text: this.newTask, done: false};
                this.tasks.push(x);
            }
            this.newTask = '';
            
            const allTasks = document.querySelector('.tasks');
            if (this.isOverflown(allTasks)) {
                this.overflow = true;
        }
        },
        taskDone: function(index){
            if (this.tasks[index].done == false){
                this.tasks[index].done = true;
            } else {
                this.tasks[index].done = false;
            }
        },
        deleteTask: function(index){
            this.tasks.splice(index, 1);
        },
        isOverflown: function(element){
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }
    },
    mounted() {
        const d = new Date();
        this.myDate = d.getDate();
        this.myYear = d.getFullYear();
        const months = new Array();
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sept";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";
        this.myMonth = months[d.getMonth()];
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        this.myDayName= weekday[d.getDay()];

    }
})
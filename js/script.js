const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'comprare il latte',
                done: false
            },
            {
                text: 'andare in farmacia',
                done: false
            },
            {
                text: 'fare lavatrice',
                done: false
            }
        ],
        myDate: '',
        myMonth: '',
        myYear: '',
        myDayName: '',
        newTask: ''
    },
    methods: {
        addTask: function(){
            if (this.newTask != ''){
                const x = {text: this.newTask, done: false};
                this.tasks.push(x);
                this.newTask = '';
            }
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
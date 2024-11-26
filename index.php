<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>vue</title>
        <script src="https://unpkg.com/vue@3"></script>
        <style>
            body {
                height: 100vh;
                display: flex; 
                justify-content: center; 
                align-items: center;
                flex-direction: column;
            }
            h1 {
                margin: 0;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                margin: 5px 0; 
                display: flex; 
                align-items: center;
            }
            .text-green {
                color:green;
            }
            .text-red {
                color:red;
            }
        </style>
    </head>
    <body>
        
        <div id="app">
            <section v-show="inProgressAssignments.length">
                <h1>In process</h1>
                <ul>
                    <li v-for="assignment in inProgressAssignments" :key="assignment.id">

                        <label>
                            {{ assignment.name }}
                            <input type="checkbox" v-model="assignment.complete">
                        </label>

                    </li>                
                </ul>
            </section>

            <section v-show="completedAssignments.length">
                <h1>Completed</h1>
                <ul>
                    <li v-for="assignment in completedAssignments" :key="assignment.id">

                        <label>
                            {{ assignment.name }}
                            <input type="checkbox" v-model="assignment.complete">
                        </label>

                    </li>                
                </ul>
            </section>
        </div>   
        
        <script>
            
            Vue.createApp({
                data() {
                    return {
                        assignments: [
                            {name:'Finish the project', complete: false, id: 1},
                            {name:'Read chapter 1', complete: false, id:2},
                            {name:'Turn homework in', complete: false, id:3}
                        ]
                    }
                },

                computed: {
                    inProgressAssignments () {
                        return this.assignments.filter(assignment => ! assignment.complete)
                    },
                    completedAssignments () {
                        return this.assignments.filter(assignment => assignment.complete)
                    }
                }
            }).mount("#app");
        
        </script>

    </body>
</html>

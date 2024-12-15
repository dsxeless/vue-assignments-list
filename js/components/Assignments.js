import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentCreate,
    },

    template: `
        <assignments-list
            :assignments="inProgressAssignments"
            title="In Progress"
            :show="showInProgress"
            can-toggle
            @toggle="toggleInProgress">
        </assignments-list>
        <assignments-list
            :assignments="completedAssignments"
            title="Completed"
            :show="showCompleted"
            can-toggle
            @toggle="toggleCompleted">
        </assignments-list>
        <assignment-create
            @add="add"
            :assignments="assignments">
        </assignment-create>
    `,

    data() {
        return {
            assignments: [],
            showInProgress: true, // Для состояния видимости секции In Progress
            showCompleted: true   // Для состояния видимости секции Completed
        };
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                const json = await response.json();
                return json;
            })
            .then(data => {
                console.log(data);
                this.assignments = data;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
            });
        },
        toggleInProgress() {
            this.showInProgress = !this.showInProgress; // Переключение состояния
        },
        toggleCompleted() {
            this.showCompleted = !this.showCompleted; // Переключение состояния
        }
    },
};

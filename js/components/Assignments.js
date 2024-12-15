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
            :show="true">
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
            showCompleted: true 
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
        add(assignment) {
            this.assignments.push({
                name: assignment.name,
                complete: false,
                id: this.assignments.length + 1,
                tag: assignment.tag || 'without tag' 
            });
        }
    },
};

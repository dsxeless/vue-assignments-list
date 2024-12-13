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
            title="In Progress">
        </assignments-list>
        <assignments-list 
            :assignments="completedAssignments" 
            title="Completed">
        </assignments-list>
        <assignment-create 
            @add="add" 
            :assignments="assignments">
        </assignment-create>
    `,

    data() {
        return {
            assignments: [],
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
        fetch('http://localhost:3000')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.assignments = data;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            })
            .then(assignments => this.assignments = assignments)
    },

    methods: {
        add (name) {
                this.assignments.push({
                    name: name,
                    complete: false,
                    id: this.assignments.length + 1,
                });

                this.newAssignment = ''
        }
    },
};

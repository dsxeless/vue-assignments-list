import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentCreate,
    },
    
    template: `
        <assignments-list :assignments="inProgressAssignments" title="In Progress"></assignments-list>
        <assignments-list :assignments="completedAssignments" title="Completed"></assignments-list>
        <assignment-create :assignments="assignments"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish the project', complete: false, id: 1 },
                { name: 'Read chapter 1', complete: false, id: 2 },
                { name: 'Turn homework in', complete: false, id: 3 }
            ],
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

    methods: {
        add () {
            if (this.newAssignment) {
                this.assignments.push({
                    name: this.newAssignment,
                    complete: false,
                    id: this.assignments.length + 1,
                });

                this.newAssignment = ''
            } else {
                alert("Assignment can't be empty")
            }
        }
    },
};

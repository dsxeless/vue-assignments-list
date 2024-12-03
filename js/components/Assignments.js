import AssignmentsList from "./AssignmentsList.js";

export default {
    components: {
        AssignmentsList
    },
    
    template: `
        <assignments-list :assignments="inProgressAssignments" title="In Progress"></assignments-list>
        <assignments-list :assignments="completedAssignments" title="Completed"></assignments-list>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish the project', complete: false, id: 1},
                {name: 'Read chapter 1', complete: false, id: 2},
                {name: 'Turn homework in', complete: false, id: 3}
            ]
        };
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
};

export default {
    template: `
        <section v-show="assignments.length">
            <h1>{{ title }}</h1>
            <ul>
                <li v-for="assignment in assignments" :key="assignment.id">
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete" @change="updateAssignments">
                    </label>
                </li>                
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    methods: {
        updateAssignments() {
            this.assignments.forEach(assignment => {
                if (assignment.complete) {
                    assignment.complete = true;
                } else {
                    assignment.complete = false;
                }
            });
        }
    }
};

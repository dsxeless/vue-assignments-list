export default {
    props: {
        assignment: Object
    },

    template: `
        <li>
            <label>
                <input type="checkbox" v-model="assignment.complete">
                <span :class="{ completed: assignment.complete }">{{ assignment.name }}</span>
            </label>
        </li>
    `,
};

export default {
    template: `
        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="A new assignment...">
            <button type="submit">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add () {
            if (this.newAssignment) {
                this.$emit('add', this.newAssignment);
                this.newAssignment = '';
            } else {
                alert("Assignment can't be empty");
            }
        }
    },
}
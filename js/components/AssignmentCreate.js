export default {
    template: `
        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="A new assignment..." required>
            <input v-model="newTag" placeholder="Tag (optional)">
            <button class="addButton" type="submit">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
            newTag: '' 
        }
    },

    methods: {
        add() {
            if (this.newAssignment) {
                this.$emit('add', {
                    name: this.newAssignment,
                    tag: this.newTag || 'without tag', 
                    complete: false
                });
                this.newAssignment = '';
                this.newTag = ''; 
            } else {
                alert("Assignment can't be empty");
            }
        }
    },
}

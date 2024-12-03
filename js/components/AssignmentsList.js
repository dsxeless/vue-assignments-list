export default {
    template: `
        <section v-show="assignments.length">
            <h1>{{ title }}</h1>
            <ul>
                <li 
                    v-for="assignment in assignments" 
                    :key="assignment.id"
                    :class="{ completed: assignment.complete }"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>                
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
};

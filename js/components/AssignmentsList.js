import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },

    template: `
        <section v-show="assignments.length">
            <h1>
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h1>
            
            <div>
                <button 
                    v-for="tag in tags"
                    @click="currentTag = tag"
                    class="filter-button"
                    :class="{
                        'current-filter-button': currentTag === tag
                    }"
                >
                    {{ tag }}
                </button>
            </div>
            <ul>
                <assignment
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },
    
    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags () {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
};

import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template: `
        <section v-show="assignments.length">
            <h1>
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h1>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            />

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
    }
};

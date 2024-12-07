export default {
    template: `
        <div>
            <button 
                v-for="tag in tags"
                @click="$emit('change', tag)"
                class="filter-button"
                :class="{
                    'current-filter-button': currentTag === tag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}

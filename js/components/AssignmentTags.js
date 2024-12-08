export default {
    template: `
        <div>
            <button 
                v-for="tag in tags"
                @click="$emit('update:modelValue', tag)"
                class="filter-button"
                :class="{
                    'current-filter-button': modelValue === tag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}

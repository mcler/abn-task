import { VList } from 'virtua/vue';
import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

const DEFAULT_SCROLL_SPEED = 3;
const MIN_SCROLL_DELTA = 30;

export function useYScrollToX(vListRef: Ref<InstanceType<typeof VList> | undefined>, scrollSpeed: Ref<number> = ref(DEFAULT_SCROLL_SPEED)) {
    function scrollHorizontally(e: WheelEvent) {
        if (e.deltaY === 0 || window.innerWidth <= 640) {
            console.log('deltaX', e.deltaMode, e.deltaX);
            return;
        }
        if (!vListRef.value) {
            return;
        }

        e.preventDefault();
        const scrollBy = e.deltaY >= 0 ? Math.max(MIN_SCROLL_DELTA, e.deltaY) : Math.min(-MIN_SCROLL_DELTA, e.deltaY)
        console.log('deltaY', e.deltaMode, e.deltaY, scrollBy);
        const scrollOffset = vListRef.value.scrollOffset;
        vListRef.value.scrollTo(scrollOffset + scrollBy * scrollSpeed.value);
    }

    onMounted(() => {
        window.addEventListener('wheel', scrollHorizontally);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('wheel', scrollHorizontally);
    });
}

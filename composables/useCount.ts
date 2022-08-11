import type { Ref } from 'vue'
export const inc = (counter: Ref<number>) => () => counter.value++
export const dec = (counter: Ref<number>) => () => counter.value--

export const useCounter = () => {
    const counter = useState('counter', () => (0))
    return {
        counter: readonly(counter),
        inc: inc(counter),
        dec: dec(counter),
    }
}
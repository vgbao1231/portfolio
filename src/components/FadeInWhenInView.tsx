import {
    motion,
    useInView,
    type MotionProps,
    type TargetAndTransition,
    type VariantLabels,
    type Transition,
} from 'framer-motion';
import {
    type ElementType,
    type ReactNode,
    type ComponentPropsWithoutRef,
    type Ref,
    useRef,
    useMemo,
} from 'react';

type FadeInWhenInViewProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    initial?: TargetAndTransition | VariantLabels | boolean;
    animate?: TargetAndTransition | VariantLabels | boolean;
    delay?: number;
    transition?: Transition;
} & Omit<ComponentPropsWithoutRef<T>, 'ref'> &
    MotionProps;

export default function FadeInWhenInView<T extends ElementType = 'div'>({
    as,
    children,
    initial,
    animate,
    delay = 0,
    transition,
    ...props
}: FadeInWhenInViewProps<T>) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true });

    const Component = as || 'div';
    const MotionComponent = useMemo(() => motion(Component), [Component]);

    return (
        <MotionComponent
            ref={ref as Ref<HTMLElement>}
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={animate ?? (isInView ? { opacity: 1, y: 0 } : false)}
            transition={{
                duration: 0.5,
                delay,
                ease: 'easeOut',
                ...transition,
            }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

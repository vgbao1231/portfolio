import { motion, useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';
import type {
    TargetAndTransition,
    VariantLabels,
    Transition,
} from 'framer-motion';

type FadeInWhenInViewProps = {
    children: ReactNode;
    initial?: TargetAndTransition | VariantLabels | boolean;
    animate?: TargetAndTransition | VariantLabels | boolean;
    delay?: number;
    transition?: Transition;
};

export default function FadeInWhenInView({
    children,
    initial,
    animate,
    delay = 0,
    transition,
}: FadeInWhenInViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={animate ?? (isInView ? { opacity: 1, y: 0 } : false)}
            transition={{
                duration: 0.5,
                delay,
                ease: 'easeOut',
                ...transition, // 👈 merge tùy chỉnh nếu có
            }}
        >
            {children}
        </motion.div>
    );
}

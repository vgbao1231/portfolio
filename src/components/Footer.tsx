export default function Footer() {
    return (
        <footer className="bg-gray-200/50 dark:bg-gray-800/50 text-center py-4 mt-10">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Bao. All rights reserved.
            </p>
        </footer>
    );
}

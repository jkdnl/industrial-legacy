import { Link, Outlet } from "react-router";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b bg-white">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/ru" className="text-xl font-semibold">
                        Industrial Heritage
                    </Link>

                    <nav className="flex gap-6 text-sm">
                        <Link to="/ru/map">Карта</Link>
                        <Link to="/ru/events">События</Link>
                        <Link to="/ru/publications">Исследования</Link>
                        <Link to="/ru/partners">Партнеры</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
                <Outlet />
            </main>

            <footer className="border-t bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
                    © 2026 Industrial Heritage Project
                </div>
            </footer>
        </div>
    );
}

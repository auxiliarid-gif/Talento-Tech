import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'IoT Pressure Monitoring System',
  description: 'Real-time IoT pressure monitoring dashboard with alerts and analytics',
}

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">IoT Dashboard</h1>
            <p className="text-slate-400 text-sm">Pressure Monitoring System</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/auth/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Real-Time Pressure Monitoring
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Monitor your IoT sensors with our advanced dashboard. Real-time alerts, detailed analytics, and comprehensive pressure data all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Real-Time Analytics</h3>
            <p className="text-slate-400">
              Monitor pressure levels in real-time with live charts and instant notifications.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Alerts</h3>
            <p className="text-slate-400">
              Get instant alerts when pressure levels exceed your configured thresholds.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-3">Secure Access</h3>
            <p className="text-slate-400">
              Enterprise-grade security with role-based access control and data encryption.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
          <p className="text-slate-400 mb-8">
            Create an account and start monitoring your IoT sensors today.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
            <Link href="/auth/sign-up">Sign Up Now</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

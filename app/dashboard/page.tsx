import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signOut } from '@/app/actions/auth'

export const metadata = {
  title: 'Dashboard - IoT Pressure Monitoring',
  description: 'Your IoT pressure monitoring dashboard',
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (!user || userError) {
    redirect('/auth/login')
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">IoT Dashboard</h1>
            <p className="text-slate-400 text-sm">Pressure Monitoring System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-medium">
                {profile?.full_name || user.email}
              </p>
              <p className="text-slate-400 text-sm capitalize">
                {profile?.role || 'operator'}
              </p>
            </div>
            <form action={signOut}>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm">Total Sensors</p>
            <p className="text-3xl font-bold text-white mt-2">0</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm">Active Alerts</p>
            <p className="text-3xl font-bold text-white mt-2">0</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm">Average Pressure</p>
            <p className="text-3xl font-bold text-white mt-2">-- PSI</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
          <h2 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h2>
          <p className="text-slate-400">
            Welcome to your IoT Pressure Monitoring Dashboard. Sensor data and charts will appear here once devices are connected and streaming data.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white">{user.email}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Full Name</p>
                <p className="text-white">{profile?.full_name || 'Not set'}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Organization</p>
                <p className="text-white">{profile?.organization || 'Not set'}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Role</p>
                <p className="text-white capitalize">{profile?.role || 'operator'}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Database Connection</span>
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API Status</span>
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Authentication</span>
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

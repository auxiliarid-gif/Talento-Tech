import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">IoT Dashboard</h1>
          <p className="text-slate-400">Pressure Monitoring System</p>
        </div>
        <Card className="border-slate-700 bg-slate-900 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              Account Created!
            </CardTitle>
            <CardDescription className="text-slate-400">
              Check your email to confirm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                You&apos;ve successfully signed up. Please check your email and click the confirmation link to activate your account before logging in.
              </p>
              <Link
                href="/auth/login"
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium"
              >
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

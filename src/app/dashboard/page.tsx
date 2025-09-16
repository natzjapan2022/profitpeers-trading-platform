'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  Trophy,
  Target,
  BookOpen,
  PlayCircle,
  CheckCircle,
  Clock,
  Star,
  Download,
  MessageSquare,
  Lock,
  ChevronRight,
  Activity,
  PieChart
} from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  type: 'video' | 'analysis' | 'strategy' | 'live';
}

interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  lessons: Lesson[];
  unlocked: boolean;
}

const tradingModules: Module[] = [
  {
    id: 'fundamentals',
    title: 'Trading Fundamentals',
    description: 'Master the basics of profitable trading',
    progress: 90,
    unlocked: true,
    lessons: [
      { id: '1', title: 'Market Structure Basics', duration: '15 min', completed: true, locked: false, type: 'video' },
      { id: '2', title: 'Risk Management 101', duration: '18 min', completed: true, locked: false, type: 'video' },
      { id: '3', title: 'Psychology of Trading', duration: '22 min', completed: true, locked: false, type: 'video' },
      { id: '4', title: 'Position Sizing', duration: '12 min', completed: true, locked: false, type: 'strategy' },
      { id: '5', title: 'Entry & Exit Strategies', duration: '25 min', completed: false, locked: false, type: 'video' },
      { id: '6', title: 'Live Trade Analysis', duration: '45 min', completed: false, locked: false, type: 'live' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Analysis',
    description: 'Advanced charting and pattern recognition',
    progress: 70,
    unlocked: true,
    lessons: [
      { id: '7', title: 'Candlestick Patterns', duration: '20 min', completed: true, locked: false, type: 'video' },
      { id: '8', title: 'Support & Resistance', duration: '16 min', completed: true, locked: false, type: 'analysis' },
      { id: '9', title: 'Moving Averages', duration: '14 min', completed: true, locked: false, type: 'video' },
      { id: '10', title: 'RSI & MACD Indicators', duration: '24 min', completed: true, locked: false, type: 'strategy' },
      { id: '11', title: 'Volume Analysis', duration: '18 min', completed: false, locked: false, type: 'analysis' },
      { id: '12', title: 'Chart Pattern Recognition', duration: '30 min', completed: false, locked: false, type: 'video' }
    ]
  },
  {
    id: 'strategies',
    title: 'Proven Strategies',
    description: 'High-probability trading setups',
    progress: 40,
    unlocked: true,
    lessons: [
      { id: '13', title: 'Breakout Trading', duration: '28 min', completed: true, locked: false, type: 'strategy' },
      { id: '14', title: 'Swing Trading Setup', duration: '22 min', completed: true, locked: false, type: 'video' },
      { id: '15', title: 'Scalping Techniques', duration: '26 min', completed: false, locked: false, type: 'strategy' },
      { id: '16', title: 'Options Strategies', duration: '35 min', completed: false, locked: false, type: 'video' },
      { id: '17', title: 'Crypto Trading Tactics', duration: '30 min', completed: false, locked: false, type: 'strategy' },
      { id: '18', title: 'Live Strategy Session', duration: '60 min', completed: false, locked: false, type: 'live' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Trading',
    description: 'Pro-level techniques and market insights',
    progress: 10,
    unlocked: false,
    lessons: [
      { id: '19', title: 'Algorithmic Trading Basics', duration: '35 min', completed: false, locked: true, type: 'video' },
      { id: '20', title: 'Market Correlation Analysis', duration: '28 min', completed: false, locked: true, type: 'analysis' },
      { id: '21', title: 'Economic Calendar Trading', duration: '25 min', completed: false, locked: true, type: 'strategy' },
      { id: '22', title: 'Multi-Timeframe Analysis', duration: '32 min', completed: false, locked: true, type: 'video' },
      { id: '23', title: 'Portfolio Management', duration: '40 min', completed: false, locked: true, type: 'strategy' },
      { id: '24', title: 'Master Trader Workshop', duration: '90 min', completed: false, locked: true, type: 'live' }
    ]
  },
  {
    id: 'psychology',
    title: 'Trading Psychology',
    description: 'Mental game and emotional control',
    progress: 0,
    unlocked: false,
    lessons: [
      { id: '25', title: 'Overcoming Fear & Greed', duration: '24 min', completed: false, locked: true, type: 'video' },
      { id: '26', title: 'Discipline & Patience', duration: '20 min', completed: false, locked: true, type: 'video' },
      { id: '27', title: 'Trading Journal Setup', duration: '18 min', completed: false, locked: true, type: 'strategy' },
      { id: '28', title: 'Mindfulness for Traders', duration: '22 min', completed: false, locked: true, type: 'video' },
      { id: '29', title: 'Building Confidence', duration: '26 min', completed: false, locked: true, type: 'video' },
      { id: '30', title: 'Mental Performance Coaching', duration: '45 min', completed: false, locked: true, type: 'live' }
    ]
  }
];

export default function Dashboard() {
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [overallProgress, setOverallProgress] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication
    const session = localStorage.getItem('userSession');
    if (session) {
      const sessionData = JSON.parse(session);
      const now = Date.now();

      if (sessionData.expiresAt > now) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem('userSession');
        router.replace('/login');
        return;
      }
    } else {
      router.replace('/login');
      return;
    }

    // Calculate overall progress
    const totalLessons = tradingModules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedLessons = tradingModules.reduce((acc, module) =>
      acc + module.lessons.filter(lesson => lesson.completed).length, 0);
    setOverallProgress(Math.round((completedLessons / totalLessons) * 100));
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'analysis': return <BarChart3 className="w-4 h-4" />;
      case 'strategy': return <Target className="w-4 h-4" />;
      case 'live': return <Activity className="w-4 h-4" />;
      default: return <PlayCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-16">
        {/* Dashboard Header */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-4">Welcome back, Trader!</h1>
                <p className="text-xl text-primary-100 mb-6">
                  Continue building your path to consistent profitability
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">Elite Trader</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary-200" />
                    <span>1,247 members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span>4.8 rating</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Course Progress</h3>
                <div className="relative">
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <span className="text-2xl font-bold mt-3 block">{overallProgress}% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trading Stats */}
        <section className="py-8 -mt-6 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Portfolio Value</p>
                    <p className="text-2xl font-bold text-green-600">$12,847</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Win Rate</p>
                    <p className="text-2xl font-bold text-primary-600">73%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Trades</p>
                    <p className="text-2xl font-bold text-gray-900">248</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Monthly Return</p>
                    <p className="text-2xl font-bold text-green-600">+18.4%</p>
                  </div>
                  <PieChart className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Module List */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trading Modules</h2>

                {tradingModules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`bg-white p-6 rounded-xl shadow-lg border transition-all duration-300 ${
                      module.unlocked
                        ? 'cursor-pointer hover:border-primary-400 border-gray-200 hover:shadow-xl'
                        : 'opacity-60 border-gray-300'
                    }`}
                    onClick={() => module.unlocked && setSelectedModule(module)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          module.unlocked
                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {module.unlocked ? (index + 1) : <Lock className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                          <p className="text-gray-600">{module.description}</p>
                        </div>
                      </div>
                      {module.unlocked && (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          {module.lessons.length} lessons
                        </span>
                        <span className="text-sm text-gray-500">
                          {module.lessons.filter(l => l.completed).length} completed
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{module.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Lessons Completed</span>
                      <span className="text-gray-900 font-semibold">22/30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Strategies Learned</span>
                      <span className="text-gray-900 font-semibold">8/12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Watch Time</span>
                      <span className="text-gray-900 font-semibold">14h 28m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Streak</span>
                      <span className="text-gray-900 font-semibold">🔥 12 days</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Completed "RSI & MACD"</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PlayCircle className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-gray-700">Started "Volume Analysis"</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-700">Unlocked Tech Analysis</span>
                    </div>
                  </div>
                </div>

                {/* Resources */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Trading Tools</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 text-left text-gray-700 hover:text-primary-600 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Trade Setups PDF</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 text-left text-gray-700 hover:text-primary-600 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">Trading Community</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 text-left text-gray-700 hover:text-primary-600 transition-colors">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-sm">Market Scanner</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Module Details */}
            {selectedModule && (
              <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedModule.title}</h3>
                    <p className="text-gray-600">{selectedModule.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedModule.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-lg border transition-all ${
                        lesson.locked
                          ? 'bg-gray-100 border-gray-300 opacity-50'
                          : lesson.completed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200 hover:border-primary-400 cursor-pointer hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {lesson.locked ? (
                          <Lock className="w-4 h-4 text-gray-500" />
                        ) : lesson.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          getTypeIcon(lesson.type)
                        )}
                        <span className={`font-medium ${
                          lesson.locked ? 'text-gray-500' : 'text-gray-900'
                        }`}>
                          {lesson.title}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${
                          lesson.locked ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {lesson.duration}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          lesson.type === 'live'
                            ? 'bg-red-100 text-red-600'
                            : lesson.type === 'strategy'
                            ? 'bg-purple-100 text-purple-600'
                            : lesson.type === 'analysis'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {lesson.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
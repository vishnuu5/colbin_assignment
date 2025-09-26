import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { User, Briefcase, ShieldCheck } from "lucide-react";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Find Your Dream Job or Perfect Candidate
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
          Connect talented professionals with amazing opportunities. Our
          platform makes recruitment simple, efficient, and effective.
        </p>

        {!user ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary text-lg px-8 py-3">
              Get Started
            </Link>
            <Link to="/login" className="btn-secondary text-lg px-8 py-3">
              Sign In
            </Link>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link to="/profile" className="btn-primary text-lg px-8 py-3">
              View Your Profile
            </Link>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <User className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Professional Profiles
          </h3>
          <p className="text-gray-600">
            Create comprehensive profiles showcasing your skills, experience,
            and achievements.
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Smart Matching
          </h3>
          <p className="text-gray-600">
            Advanced algorithms connect the right talent with the right
            opportunities.
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Secure & Reliable
          </h3>
          <p className="text-gray-600">
            Your data is protected with enterprise-grade security and privacy
            measures.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-50 rounded-2xl p-8 my-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

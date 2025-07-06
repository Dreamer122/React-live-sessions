import React, { useEffect } from 'react';
import { databases } from "../lib/appwrite";
import { Query } from 'appwrite';
import { setLoading, setUserData } from '../Redux/Features/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router';
import { Allpost } from '../Components/Dashboard/Allpost';
import { Edit3, Plus, User, Mail, Calendar, Loader2 } from 'lucide-react';

export const Dashboard = () => {
  const { userid } = useParams();
  const { loading, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Get user data
  const getUserData = async () => {
    try {
      dispatch(setLoading(true));
      const response = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("userid", userid)]
      );
      dispatch(setUserData(response.documents[0]));
    } catch (error) {
      console.log("error occurred while fetching user data", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserData();
  }, [userid]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
          <p className="text-white text-xl font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background */}
      <div className="relative h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center opacity-20"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-8">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/20 p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                {/* User Info Section */}
                <div className="flex items-center gap-6">
                  {/* Profile Picture */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-black rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img 
                      src={userData?.profilePic || `https://api.dicebear.com/9.x/initials/svg?seed=${userData?.fullname}`} 
                      alt="Profile"
                      className="relative h-20 w-20 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                  
                  {/* User Details */}
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-black tracking-tight">
                      {userData?.fullname || 'Welcome Back'}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="text-lg">{userData?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Member since {new Date().getFullYear()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to={`/EditProfile/${userid}`}
                    className="group flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    Edit Profile
                  </Link>
                  
                  <Link 
                    to={`/createblog/${userid}`}
                    className="group flex items-center gap-3 px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Plus className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                    <span className="relative z-10">Create Blog</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative -mt-32 pt-40 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-white rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Your Blog Posts</h2>
            </div>
            <p className="text-gray-400 text-lg">Manage and view all your published content</p>
          </div>

          {/* Posts Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 min-h-[400px]">
            <Allpost />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};


const FAQ = () => {
    return (
        <div>

            <div className="p-8">
                <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                    <h4 className="text-4xl font-bold text-[rgb(2,0,36);] tracking-widest uppercase text-center">FAQ</h4>
                    <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                    <div className="space-y-12 px-2 xl:px-16 mt-12">


                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-blue-600">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-[rgb(2,0,36); font-bold">What is a bucket list-based social media website?</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-[rgb(2,0,36);">A bucket list-based social media website is a platform where users can create, share, and track their personal bucket lists. These lists include goals, experiences, and achievements they aspire to accomplish. The website allows users to connect with others who have similar goals, find inspiration, and receive encouragement and tips on how to achieve their aspirations.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-blue-600">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-[rgb(2,0,36); font-bold">How do I create and share my bucket list on the platform?</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-[rgb(2,0,36);">Creating and sharing your bucket list on the platform is simple:

                                        Sign Up/Log In: Create an account or log in to your existing one.
                                        Create Your List: Navigate to the Create Bucket List section. Here, you can add individual goals or experiences you wish to achieve.
                                        Share Your List: Once your list is created, you can choose to make it public or keep it private. If public, other users can see your list, offer encouragement, and share their own tips. You can also share your list on other social media platforms to inspire friends and family.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-blue-600">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-[rgb(2,0,36); px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-[rgb(2,0,36); font-bold">What features are available to help me achieve my bucket list goals?</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-[rgb(2,0,36);">The website offers a variety of features to assist you in achieving your bucket list goals:

                                        Goal Tracking: Mark goals as in progress or completed to keep track of your achievements.
                                        Community Support: Connect with other users who have similar goals, join groups, and participate in discussions for motivation and advice.
                                        Resource Sharing: Access articles, videos, and tutorials related to your goals. Other users and experts can share resources to help you plan and execute your bucket list items.
                                        Milestone Celebrations: Receive notifications and celebrate milestones with the community when you complete significant goals.
                                        Personalized Recommendations: Based on your interests, the platform suggests new goals and experiences you might want to add to your bucket list.</span>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div>
                <div className="py-[auto] relative flex flex-nowrap overflow-x-hidden ">
                    <div className="py-[auto] animate-marquee whitespace-nowrap">
                        <span className="mx-4 text-4xl">Login/Signup</span>
                        <span className="mx-4 text-4xl">Add Bucket List Items</span>
                        <span className="mx-4 text-4xl">Explore Others lists</span>
                        <span className="mx-4 text-4xl">Share Experiences</span>
                        <span className="mx-4 text-4xl">Complete your bucket List IRL</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default FAQ
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { Stethoscope, Building2 } from 'lucide-react';

const RoleSelection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Choose your role</h2>
                <p className="mt-4 text-lg text-gray-600">Select how you would like to register with Clinic&Co.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                <Link to="/register/doctor" className="group">
                    <Card className="h-full flex flex-col items-center p-10 transition-all hover:shadow-xl border-2 border-transparent hover:border-blue-500 cursor-pointer">
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Stethoscope className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">I am a Doctor</h3>
                        <p className="text-center text-gray-500">
                            Register with your medical license and specialty details.
                        </p>
                    </Card>
                </Link>

                <Link to="/register/clinic" className="group">
                    <Card className="h-full flex flex-col items-center p-10 transition-all hover:shadow-xl border-2 border-transparent hover:border-blue-500 cursor-pointer">
                        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Building2 className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">I represent a Clinic</h3>
                        <p className="text-center text-gray-500">
                            Register your clinic with operating license and location details.
                        </p>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default RoleSelection;

import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Slack } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-md w-full text-center p-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h2>
                <p className="text-gray-600 mb-6">
                    Your details have been received and are currently under verification.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Slack className="h-4 w-4" /> Next Steps
                    </h4>
                    <p className="text-sm text-blue-800">
                        Once verified, you will receive a Slack invitation link via email to join the exclusive Clinic&Co workspace.
                    </p>
                </div>

                <Link to="/">
                    <Button variant="outline" className="w-full">
                        Return to Home
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default SuccessPage;

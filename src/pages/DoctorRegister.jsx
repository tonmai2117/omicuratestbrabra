import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const DoctorRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        licenseNumber: '',
        specialty: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.licenseNumber) newErrors.licenseNumber = 'Medical license is required';
        if (!formData.specialty) newErrors.specialty = 'Specialty is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate API call
        console.log('Submitting Doctor Registration:', formData);
        navigate('/verification');
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Doctor Registration
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Join our network of verified healthcare professionals.
                    </p>
                </div>

                <Card className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                placeholder="John"
                            />
                            <Input
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                placeholder="Doe"
                            />
                        </div>

                        <Input
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            placeholder="doctor@example.com"
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                        />

                        <Input
                            label="Medical License Number"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            error={errors.licenseNumber}
                            placeholder="MD-123456"
                        />

                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Specialty
                            </label>
                            <select
                                name="specialty"
                                value={formData.specialty}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.specialty ? 'border-red-500' : 'border-gray-300'
                                    } bg-white`}
                            >
                                <option value="">Select a specialty</option>
                                <option value="General Practice">General Practice</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.specialty && (
                                <p className="mt-1 text-sm text-red-600">{errors.specialty}</p>
                            )}
                        </div>

                        <Button type="submit" variant="primary" className="w-full flex justify-center py-3">
                            Submit Registration
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default DoctorRegister;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ClinicRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        clinicName: '',
        address: '',
        email: '',
        phone: '',
        operatingLicense: '',
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
        if (!formData.clinicName) newErrors.clinicName = 'Clinic name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.operatingLicense) newErrors.operatingLicense = 'Operating license is required';
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
        console.log('Submitting Clinic Registration:', formData);
        navigate('/verification');
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Clinic Registration
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Register your medical facility to connect with professionals.
                    </p>
                </div>

                <Card className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input
                            label="Clinic Name"
                            name="clinicName"
                            value={formData.clinicName}
                            onChange={handleChange}
                            error={errors.clinicName}
                            placeholder="HealthPlus Clinic"
                        />

                        <Input
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            error={errors.address}
                            placeholder="123 Medical St, City, Country"
                        />

                        <Input
                            label="Contact Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            placeholder="clinic@example.com"
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
                            label="Operating License Number"
                            name="operatingLicense"
                            value={formData.operatingLicense}
                            onChange={handleChange}
                            error={errors.operatingLicense}
                            placeholder="LIC-987654"
                        />

                        <Button type="submit" variant="primary" className="w-full flex justify-center py-3">
                            Submit Registration
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default ClinicRegister;

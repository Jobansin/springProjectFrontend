import React, { useEffect, useState } from "react";
import "./SignupForm.css";

export default function SignupForm() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
        setFormData({ name: "", email: "", password: "" });
    };

    return (
        <section className={visible ? "fade-in" : "hidden"}>
            <form onSubmit={handleSubmit}>
                <h1>SIGN UP</h1>
                <div className="inputbox">
                    <ion-icon name="person-outline"></ion-icon>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Name</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Password</label>
                </div>
                <button type="submit">Signup</button>
                <div className="register">
                    <p>Already have an account? <a href="#">Log In</a></p>
                </div>
            </form>
        </section>
    );
};
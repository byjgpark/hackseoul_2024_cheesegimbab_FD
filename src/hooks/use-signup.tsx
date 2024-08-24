// src/hooks/
import * as React from "react";

interface SignUpData{


}

export function useSignUp() {
    const [formData, setFormData] = React.useState<SignUpData>({ name: '', email: '', password: '' });
    

  // ... sign-up logic
}
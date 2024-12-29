
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import RegisterForm from "./auth/registration-form";
  
const SignupModal = () => {
    return (
        <AlertDialog>
        <AlertDialogTrigger className="focus:outline-none">
            <div className="font-semibold px-4 py-2 rounded-full text-sm border focus:outline-none">Sign up</div>
        </AlertDialogTrigger>
        <AlertDialogContent className="py-0 px-0">
               <RegisterForm />
        </AlertDialogContent>
        </AlertDialog>
    )
}

export default SignupModal;
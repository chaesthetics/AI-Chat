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
import LoginForm from "./auth/login-form";
  
const LoginModal = () => {
    return (
        <AlertDialog>
        <AlertDialogTrigger className="focus:outline-none">
            <div className="bg-black text-white font-semibold px-4 py-2 rounded-full text-sm">Log in</div>
        </AlertDialogTrigger>
        <AlertDialogContent className="py-0 px-0">
               <LoginForm />
        </AlertDialogContent>
        </AlertDialog>
    )

}

export default LoginModal;
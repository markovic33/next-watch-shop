import { forwardRef } from "react";

export default forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(function Select({ ...props }, ref) {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ref={ref}
        {...props}
      />
    </div>
  );
});

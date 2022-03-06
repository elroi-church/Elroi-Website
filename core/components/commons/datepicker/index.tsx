import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

interface DatePickerInputProps {
  dateFormat: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  className: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selectedDate,
  dateFormat,
  onChange,
  className,
}) => {
  if (!selectedDate) selectedDate = new Date();

  return (
    <div className="flex flex-col">
      <div className={`relative ${className}`}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => onChange(date)}
          dateFormat={dateFormat}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
        />
      </div>
    </div>
  );
};

export default DatePickerInput;

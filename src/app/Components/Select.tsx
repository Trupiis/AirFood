// components/SelectCategory.tsx
"use client";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string; // para envainar con Tailwind si querés
};

export default function SelectCategory({
  label = "Categoría",
  value,
  options,
  onChange,
  className,
}: Props) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };

  return (
    <div className={className}>
      <FormControl
        size="medium"
        sx={{
          minWidth: 200,
          "& .MuiInputLabel-root": {
            color: "#fff", // Color del label por defecto
            fontSize: "1rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#A66915", // Color del label cuando está activo
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff", // Borde por defecto
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A66915", // Borde hover
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A66915", // Borde activo
            borderWidth: 2,
          },
          "& .MuiSelect-select": {
            color: "#fff", // Texto selec.
            fontSize: "1rem",
            fontWeight:"Bold"
          },
          "& .MuiMenuItem-root": {
            fontSize: "0.9rem",
            color: "#333", // Color de texto de cada opción
          },
          "& .MuiMenuItem-root.Mui-selected": {
            backgroundColor: "#A66915", // Fondo seleccionada
            color: "#fff",
          },
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "#A66915", // Hover de cada opción
            color: "#fff",
          },
        }}
      >
        <InputLabel id="category-label">{label}</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

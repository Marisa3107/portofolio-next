"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    // Dijalankan sekali setelah tombol tampil di browser: pakai tema yang tersimpan
    useEffect(() => {
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setGelap(true);
        }
    }, []);

    function gantiTema() {
        const sekarangGelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", sekarangGelap ? "gelap" : "terang");
        setGelap(sekarangGelap);
    }

    return (
     <Button variant="outline" onClick={gantiTema} className="w-36 text-center border-white bg-transparent text-white hover:bg-aksen hover:text-white">
        {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
    );
}
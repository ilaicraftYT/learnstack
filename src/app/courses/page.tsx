"use client";
import { Button } from "@/components/ui/button";
import { Courses, getCourses } from "@/lib/hooks";
import { useState } from "react";
import { IconFilter } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CoursesIndex() {
  const [courses, setCourses] = useState<Courses>();

  getCourses().then((data) => {
    setCourses(data);
  });

  return (
    <main className="h-full">
      <section className="w-full h-1/6 bg-primary flex items-center justify-center">
        <h1 className="font-bold text-4xl text-primary-foreground">Courses</h1>
      </section>
      <section className="mt-12 mx-2">
        <div className="inline-flex w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="mr-2">
                <IconFilter size={18} className="mr-2" /> Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownContent />
          </DropdownMenu>
          <Input placeholder="Filter by name" className="w-full"></Input>
        </div>
      </section>
    </main>
  );
}

function DropdownContent() {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <DropdownMenuContent>
      <DropdownMenuLabel>Level</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={filters.includes("beginner")}
        onCheckedChange={() =>
          filters.includes("beginner")
            ? setFilters(filters.filter((v) => v !== "beginner"))
            : setFilters([...filters, "beginner"])
        }
      >
        Beginner
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={filters.includes("medium")}
        onCheckedChange={() =>
          filters.includes("medium")
            ? setFilters(filters.filter((v) => v !== "medium"))
            : setFilters([...filters, "medium"])
        }
      >
        Medium
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={filters.includes("advanced")}
        onCheckedChange={() =>
          filters.includes("advanced")
            ? setFilters(filters.filter((v) => v !== "advanced"))
            : setFilters([...filters, "advanced"])
        }
      >
        Advanced
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  );
}

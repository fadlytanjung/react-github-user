import RepoCard from "@/components/RepoCard";
import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "@/utils/test";

describe("RepoCard", () => {
  const mockUser = {
    login: "fadlytanjung",
    avatar_url: "https://avatars.githubusercontent.com/u/26320892?v=4",
  };

  it("renders avatar and username", () => {
    renderWithProviders(<RepoCard {...mockUser} />);

    expect(screen.getByText("fadlytanjung")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockUser.avatar_url);
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    renderWithProviders(<RepoCard {...mockUser} onClick={handleClick} />);

    const card = screen.getByText("fadlytanjung");
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

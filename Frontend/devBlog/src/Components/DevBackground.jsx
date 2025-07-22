import {
  Code,
  Terminal,
  GitBranch,
  Braces,
  Bug,
  Settings2,
  FileCode,
  Server,
  Cpu,
  Database,
  Globe,
  Laptop,
  Monitor,
  HardDrive,
  Cloud,
  Activity,
  FileJson,
  Code2,
  Wrench,
  Puzzle,
  Shield,
  Folder,
  FolderGit2,
  Network,
  FileType,
  ClipboardList,
  LayoutDashboard,
  Squirrel,
  Zap,
  Lightbulb,
  Atom,
  Keyboard,
  GitCommit,
  GitMerge,
} from "lucide-react";

import { useEffect, useState } from "react";

const icons = [ 
    Code,
    Terminal,
    GitBranch,
    Braces,
    Bug,
    Settings2,
    FileCode,
    Server,
    Cpu,
    Database,
    Globe,
    Laptop,
    Monitor,
    HardDrive,
    Cloud,
    Activity,
    FileJson,
    Code2,
    Wrench,
    Puzzle,
    Shield,
    Folder,
    FolderGit2,
    Network,
    FileType,
    ClipboardList,
    LayoutDashboard,
    Squirrel,
    Zap,
    Lightbulb,
    Atom,
    Keyboard,
    GitCommit,
    GitMerge
];

const DevBackground = () => {
    document.documentElement.classList.add("dark");

    const[backgroundItems, setbackgroundItems] = useState([]);

    useEffect(() => {

        GenerateBackground();

        const handleResize = () => {
            GenerateBackground();
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    const GenerateBackground = () => {

        const backgroundItems = [];
        const width = window.innerWidth;
        const height = window.innerHeight;
        const padding = 0.8;

        const cols = Math.floor(width / 30);
        const rows = Math.floor(height / 30);

        for(let row=0; row<rows;row++){
            for(let col=0; col<cols; col++){
            const Icon = icons[Math.floor(Math.random()*icons.length)];
            const x = (col * 100) / cols + Math.random() * padding;
            const y = (row * 100) / rows + Math.random() * padding;
            const scale = Math.random() *0.5 + 0.4;
            
             
            backgroundItems.push(
                <Icon 
                    key={`${row}-${col}`}
                    className="absolute text-muted-foreground animate-fadeIn"
                    style = {{
                        position: "absolute",
                        left: `${x}%`,
                        top:`${y}%`,
                        transform: `scale(${scale}) rotate(315deg)`
                    }}
                />
            );
        }   
    }
        setbackgroundItems(backgroundItems);
    };

    return(
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-foreground/20 bg-background">
            {backgroundItems}
        </div>
    );
};

export default DevBackground;